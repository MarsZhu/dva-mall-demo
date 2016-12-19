import {hashHistory} from 'dva/router';
import {query,submitData} from '../services/menus'


export default {
  namespace:'menus',

  state:{
    dataSource:null,
    selectValue:null,
  },

  subscriptions:{
    setup({dispatch,history}){
      history.listen(location=>{
        if(location.pathname==='/menus'){
            dispatch({
              type:'query',
              payload:{

              }
            });
        }
      });
    },
  },

  effects:{

    *modifyMenus({payload},{select,call,put}){

      const { data }=yield call(submitData,payload);
      if(data){
        yield put({
          type:'querySuccess',
          payload:{
            dataSource:data.data
          }
        });
      }
      },
    *query({payload},{select,call,put}){
      const { data }=yield call(query,payload);
      if(data){
          yield put({
            type:'querySuccess',
            payload:{
              dataSource:data.data
            }
          });
      }
     },

  },

  reducers:{

    querySuccess(state,action){
      return {...state,...action.payload};
    },
    changeValue(state,action){
      return {...state,...action.payload};
    },

  }

}
