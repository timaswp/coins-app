import React, { useEffect } from "react";
import CoinsListItem from "../coins-list-item/coins-list-item";
import "./coins-list.scss";
import { useLocation } from "react-router-dom";
import WithCoinService from "../hoc/with-coin-service";
import { connect } from "react-redux";
import { coinsLoaded, coinsRequested, loadingError } from "../../actions";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

const CoinsList = ({CoinService, coinsList, coinsRequested, coinsLoaded, loadingError, loading, error}) => {
    const location = useLocation();

    useEffect(() => {
        coinsRequested();

        CoinService.getCoinsList(location.search)
            .then(res => coinsLoaded(res))
            .catch(() => loadingError());

    }, [CoinService, location.search]);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <Error/>
    }

    if (coinsList.data.length == 0) {
        return <div className="coins-list__not-found">Coins not found :(</div>
    }

    const items = coinsList.data.map(coin => {
        return <CoinsListItem key={coin._id} coinData={coin}/>
    });

    return (
        <View items={items}/>
    )
};

const View = ({items}) => {
    return (
        <div className="coins-list">
            {items}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        coinsList: state.coins,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    coinsRequested,
    coinsLoaded,
    loadingError
};

export default WithCoinService()(connect(mapStateToProps, mapDispatchToProps)(CoinsList));