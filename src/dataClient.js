import axios from 'axios';

export async function fetchMealCategories() {
    const response  = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const mealsCategories = response.json();
    return mealsCategories;
}

export async function fetchMealsByName(inputString) {
    try {
        console.log('API called')
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputString}`);
        return response?.data?.meals;
    }
    catch (error) {
        console.error(error);
    }
}

export async function fetchMealsByFirstLetter(letter) {
    try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        return  response?.data?.meals;
    }
    catch(error){
        console.error(error);
    }
}

export async function getMealDetailsById(id) {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        return response?.data?.meals;
    }
    catch (error) {
        console.error(error);
    }
}


