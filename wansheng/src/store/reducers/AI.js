import { INTERIOR_DESIGN_PATTERN } from "../../data/ai-describes"
import { scott} from '../../assets/imports';
const initialState ={
    customInput: INTERIOR_DESIGN_PATTERN,
    customImg: "",
    customDescription: "",
    aiImgs: []
};

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_AI":
            state.customInput.map((item,key)=>{
                if (item.id === action.id){
                    item.value = action.value;
                }
                return item;
            });
            return state;
        case "GET_AI":
            return state;
        case "SUBMIT_DES":
            return {...state, customDescription: action.value}
        case "SET_AIIMG":
            return {...state, aiImgs: action.aiImgs}
        default:
            return state;
    }
}
export default reducer;