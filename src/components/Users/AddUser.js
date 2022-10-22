import React ,{useState} from 'react'
import Card from '../UI/Card';
function AddUser(props) {
  const [enteredUsername , setEnterUsername] = useState('')
  const [enteredAge , setEnterAge] = useState('')

  const [error , setError]= useState();

        const addUsersHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0 ){
          setError({
            title : 'Invalid input'
          })
           return;
        }
         
       

        else if (+enteredAge < 1){
          setError({
            title : 'Invalid Age'
          })
          return;
        }

    
  

       props.onAddUser(enteredUsername,enteredAge);
        setEnterAge('')
        setEnterUsername('')
    }

    const usernameChangeHandler = (event) =>{
       setEnterUsername(event.target.value)
    }
    
    const ageChangeHandler = (event) =>{
      setEnterAge(event.target.value)
   }
  return (
    <Card>
   <form onSubmit={addUsersHandler}>
    {error ? <h1>{error.title}</h1> : <h1>{error}</h1> }
     <label htmlFor='username'>Username</label>
     <input type="text" id='username' onChange={usernameChangeHandler} value={enteredUsername}/>

     <label htmlFor='age'>Age</label>
     <input type="number" id='age' onChange={ageChangeHandler} value={enteredAge}/>
    <button type='submit'>adds</button>
   </form>
  
   </Card>
  )
}

export default AddUser
