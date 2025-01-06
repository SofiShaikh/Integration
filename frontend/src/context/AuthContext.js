import {createContext, useEffect, useReducer} from 'react'

const initial_state = {
    user:null,
    token:null,
    loading:false,
    error:null
}

export const AuthContext = createContext(initial_state);

const AuthReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                token: null,
                loading:true,
                error:null
            };
            case 'LOGIN_SUCCESS':
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('token', action.payload.token);
                return{
                    user:action.payload,
                    token: null,
                    loading:false,
                    error:null
                };
                case 'LOGIN_FAILURE':
                return{
                    user:null,
                    token: null,
                    loading:false,
                    error:action.payload
                }
                case 'REGISTER_SUCCESS':
                return{
                    user:null,
                    token: null,
                    loading:false,
                    error:null
                }
                case 'LOGOUT':
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                return{
                    user:null,
                    token: null,
                    loading:false,
                    error:null
                }


            default :
            return state;
    }
};


export const AuthContextProvider =({children})=>{

    const [state,dispatch] = useReducer(AuthReducer, initial_state)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        dispatch,
    }}>
        {children}
    </AuthContext.Provider>
}