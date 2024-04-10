export async function fetchMealCategories() {
    const response  = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const mealsCategories = response.json();
    return mealsCategories;
}