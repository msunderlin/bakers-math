import {useState, useEffect } from 'react';
import './App.css';
import RecipeForm from './components/recipe-form';
import RecipeFormContainer from './components/recipe-form-container';
import Page from './components/pageTemplate/page';

function App(){
  const [recipe,setRecipe] = useState([
    { iname:"",
      iweight:0,
      ibase:true,
      ipercent:0,
    }
  ]);

  

  const handleChange = (e) =>{
    let index = e.target.dataset.index;
    let newRecipe = [...recipe];
    newRecipe[index][e.target.name] = e.target.value;
    setRecipe(newRecipe);
    handlePercentChange();
  }

  const handleRadioChange =(e)=>{
    let index = e.target.dataset.index;
    let newRecipe = [...recipe];
    newRecipe[index][e.target.name] = e.target.checked;
    setRecipe(newRecipe);
    handlePercentChange();
  }


  const handleAddIngredient=()=>{
    addIngredient();
  }

  const handlePercentChange = ()=>{
    let newRecipe = [...recipe];
    let totalweight = 0;
    newRecipe.filter(ingredient=>{
      if(ingredient.ibase){ totalweight += parseInt(ingredient.iweight);}
      return ingredient.ibase;
    });

    for(let i=0; i < newRecipe.length; i++){
        newRecipe[i].ipercent = recipe[i].iweight/totalweight;
      }

    setRecipe(newRecipe);
    let encrypted = window.btoa(JSON.stringify(recipe));
    window.history.pushState('App','App','?data='+encrypted);
  };

  const addIngredient = ()=>{
    const ingredient = {
      iname:"",
      iweight:0,
      ibase:false,
      ipercent:0,
    }
    let newRecipe = [...recipe];
    newRecipe.push(ingredient);
    setRecipe(newRecipe);
  }
  return (
    <div className="App bg-nord4 h-screen w-screen">
      <Page>
        <RecipeFormContainer>
        <RecipeForm 
          recipe={recipe} 
          handleChange={handleChange} 
          handleAddIngredient={handleAddIngredient} 
          handleRadioChange={handleRadioChange} 
        />
          </RecipeFormContainer>
      </Page>
    </div>
  );
}


export default App;
