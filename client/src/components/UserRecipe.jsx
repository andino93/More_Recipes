import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'react-proptypes';
import Header from './partials/Headers/Header.jsx';
import FooterComponent from './partials/Footer.jsx';
import RecipeComponent from './Recipe/Recipe.jsx';
import PaginateComponent from './partials/Paginate.jsx';
import { getUserRecipes } from '../actions/recipe/recipeActions';
import { decodeToken } from '../utils/helpers';

/**
 *
 *
 * @export
 * @className UserRecipeComponent
 * @extends {React.Component}
 */
class UserRecipe extends React.Component {
  /**
   *
   *
   * @returns {XML} XML/JSX
   * @memberof UserRecipeComponent
   */
  componentDidMount() {
    const { token } = window.sessionStorage;
    const { id } = decodeToken(token);
    this.props.getUserRecipes(id);
  }


  /**
   * 
   * 
   * @returns {XML} XML/JSX
   * @memberof UserRecipeComponent
   */
  render() {
    const userRecipes = this.props.userRecipes;
    const decodedToken = decodeToken(window.sessionStorage.token);
    return (
      <div>
        <Header/>
        <div className="wrapper">
          <div className="container">
            <nav aria-label="breadcrumb" className="mt-40 mb-10" >
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/profile">User</Link></li>
                <li className="breadcrumb-item active" aria-current="page">My Recipes</li>
              </ol>
            </nav>
          </div>
          <div className="container mb-20 recipe-details-container">
            <div className="row">
              {userRecipes.map((recipe, index) => (
                <RecipeComponent
                  key={index}
                  recipe={recipe}
                  decodedToken={decodedToken}
                />
              ))}
            </div>
          </div>
          <div className="clearfix" />
          <PaginateComponent/>
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

UserRecipe.propTypes = {
  getUserRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userRecipes: state.recipeReducer.getUserRecipesSuccess
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserRecipes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipe);