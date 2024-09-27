import React, { Component } from "react";
import { connect } from 'react-redux';
import WithCoinService from '../hoc/with-coin-service';
import { catalogLoaded, catalogRequested, loadingError } from '../../actions';
import CategoryItem from "../category-item/category-item";
import "./category-list.scss";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

class CategoryList extends Component {
    componentDidMount() {
        const {CoinService, catalogLoaded, catalogRequested, loadingError} = this.props;

        catalogRequested();

        CoinService.getCategories()
            .then(res => catalogLoaded(res))
            .catch(() => loadingError());
    }

    render() {
        const {categories, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        const items = categories.map((category, i) => {
            return <CategoryItem
                        key = {i} 
                        category = {category}/>
        });

        return (
            <View items = {items}/>
        )
    }
};

const View = ({items}) => {
    return (
        <ul className="category__list">
            {items}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    catalogLoaded,
    catalogRequested,
    loadingError
};

export default WithCoinService()(connect(mapStateToProps, mapDispatchToProps)(CategoryList));