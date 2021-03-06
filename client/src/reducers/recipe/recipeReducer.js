import actionTypes from '../../actions/actionTypes';
import { recipeResponseType } from '../../utils/helpers';

const initialState = {
  responseType: null,
  message: '',
  recipeId: null,
  isCreating: false,
  getUserRecipesSuccess: [],
  getUserRecipesFailure: '',
  recipe: { },
  recipes: [],
  reviews: [],
  favorites: []
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECIPE_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.ADD_RECIPE_SUCCESS,
        message: action.message,
        recipeId: action.recipeId
      };
    case actionTypes.ADD_RECIPE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
        message: action.error
      };
    case actionTypes.IS_RECIPE_CREATING:
      return {
        ...state,
        isCreating: action.bool
      };
    case actionTypes.GET_USER_RECIPES_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.GET_USER_RECIPES_SUCCESS,
        getUserRecipesSuccess: action.data.userRecipes,
        pagination: action.data.pagination
      };
    case actionTypes.GET_USER_RECIPES_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
        getUserRecipesFailure: action.error
      };
    case actionTypes.VIEW_RECIPE_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.VIEW_RECIPE_SUCCESS,
        recipe: action.data
      };
    case actionTypes.VIEW_RECIPE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
      };
    case actionTypes.EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.EDIT_RECIPE_SUCCESS,
        message: action.message
      };
    case actionTypes.EDIT_RECIPE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
        message: action.error
      };
    case actionTypes.CLEAR_RECIPE_MESSAGE:
      return {
        ...state,
        responseType: recipeResponseType.CLEAR_RECIPE_MESSAGE,
        message: ''
      };
    case actionTypes.DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.DELETE_RECIPE_SUCCESS,
        message: action.message
      };
    case actionTypes.DELETE_RECIPE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
        message: action.error
      };
    case actionTypes.POST_REVIEW_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.POST_REVIEW_SUCCESS,
        message: ''
      };
    case actionTypes.POST_REVIEW_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
        message: action.error
      };
    case actionTypes.GET_REVIEW_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.GET_REVIEW_SUCCESS,
        message: '',
        reviews: action.review
      };
    case actionTypes.GET_REVIEW_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
        message: action.error
      };
    case actionTypes.GET_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.GET_ALL_RECIPES_SUCCESS,
        recipes: action.data.allRecipes,
        pagination: action.data.pagination
      };
    case actionTypes.GET_ALL_RECIPES_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
      };
    case actionTypes.CREATE_USER_FAVORITE_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.CREATE_USER_FAVOURITE
      };
    case actionTypes.CREATE_USER_FAVORITE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE
      };
    case actionTypes.GET_USER_FAVORITES_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.GET_USER_FAVORITE_SUCCESS,
        favorites: action.data.userFavorites,
        pagination: action.data.pagination
      };
    case actionTypes.CREATE_UPVOTE_SUCCESSFUL:
      return {
        ...state,
        responseType: recipeResponseType.CREATE_UPVOTE_SUCCESSFUL,
        upvotes: action.data.recipe.upvotes,
        downvotes: action.data.recipe.downvotes
      };
    case actionTypes.CREATE_UPVOTE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE
      };
    case actionTypes.CREATE_DOWNVOTE_SUCCESSFUL:
      return {
        ...state,
        responseType: recipeResponseType.CREATE_DOWNVOTE_SUCCESSFUL,
        upvotes: action.data.recipe.upvotes,
        downvotes: action.data.recipe.downvotes
      };
    case actionTypes.CREATE_DOWNVOTE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE
      };
    case actionTypes.GET_ALL_FAVORITES_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.GET_ALL_FAVORITES_SUCCESS,
        favorites: action.favorites.favorites,
        pagination: action.favorites.pagination
      };
    case actionTypes.GET_ALL_FAVORITES_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
      };
    case actionTypes.SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        responseType: recipeResponseType.SEARCH_RECIPE_SUCCESS,
        recipes: action.recipes.results,
        pagination: action.recipes.pagination
      };
    case actionTypes.SEARCH_RECIPE_FAILURE:
      return {
        ...state,
        responseType: recipeResponseType.FAILURE,
      };
    default:
      return state;
  }
};

export default recipeReducer;