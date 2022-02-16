import { toast } from 'react-toast'
import { errors } from '../constants/elements';

export const errorHandler = (error) => {

    if ( !Number.isInteger(error.code) ) {
       toast.error(`${error.code.status}: ${errors.get(error.message.result) || error.message.result}`);

    }else if(error.code === 1){

      toast.error("smth went wrong try later or reload a page");

      }else{
        toast.error("server time out");

      }
    
  };
