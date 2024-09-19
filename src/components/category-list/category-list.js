import React, { Component } from "react";
import { connect } from 'react-redux';
import WithCoinService from '../hoc/with-coin-service';
import { catalogLoaded, catalogRequested } from '../../actions';
import CategoryItem from "../category-item/category-item";
import "./category-list.scss";

class CategoryList extends Component {
    componentDidMount() {
        const {CoinService, catalogLoaded, catalogRequested} = this.props;

        catalogRequested();

        CoinService.getCategories()
            .then(res => catalogLoaded(res))
            .catch(err => console.error(err));
    }

    render() {
        const {categories} = this.props;

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
        categories: state.categories
    }
};

const mapDispatchToProps = {
    catalogLoaded,
    catalogRequested
};

export default WithCoinService()(connect(mapStateToProps, mapDispatchToProps)(CategoryList));