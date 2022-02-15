"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelValidation = exports.Roles = exports.Authorized = void 0;
const common_1 = require("@nestjs/common");
const core_module_config_1 = require("../core/core-module.config");
const common_helpers_1 = require("./common.helpers");
function Authorized() {
    return (0, common_1.SetMetadata)(core_module_config_1.METADATA_AUTHORIZED_KEY, true);
}
exports.Authorized = Authorized;
function Roles(...roles) {
    return (0, common_1.SetMetadata)(core_module_config_1.METADATA_ROLE_KEY, roles);
}
exports.Roles = Roles;
function ModelValidation(Model, requiredState) {
    return (target, propertyKey, descriptor) => {
        if (!descriptor) {
            descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        }
        const originalMethod = descriptor.value;
        descriptor.value = async function (data, ...rest) {
            const validatedData = new Model(data, requiredState);
            const errors = await validatedData.errorStates;
            if (errors.length) {
                throw new common_1.HttpException({ successful: false, errors }, common_1.HttpStatus.BAD_REQUEST);
            }
            return originalMethod.call(this, (0, common_helpers_1.getValuesFromModel)(validatedData), ...rest);
        };
    };
}
exports.ModelValidation = ModelValidation;
//# sourceMappingURL=decorators.js.map