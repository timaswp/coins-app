import React, { useEffect } from "react";
import CoinsListItem from "../coins-list-item/coins-list-item";
import "./coins-list.scss";
import { useLocation } from "react-router-dom";
import WithCoinService from "../hoc/with-coin-service";
import { connect } from "react-redux";
import { coinsLoaded, coinsRequested } from "../../actions";

const CoinsList = ({CoinService, coinsList, coinsRequested, coinsLoaded}) => {
    const location = useLocation();

    useEffect(() => {
        coinsRequested();

        CoinService.getCoinsList(location.search)
            .then(res => coinsLoaded(res))
            .catch(err => console.error(err));

    }, []);

    console.log(coinsList.data);

    // const items = coinsList.data.map(coin => {
    //     return <CoinsListItem data-coin={coin}/>
    // })

    // return (
    //     <View items={items}/>
    // )

    return <CoinsListItem/>
};

const View = (items) => {
    return (
        <div className="coins-list">
            {items}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        coinsList: state.coins
    }
};

const mapDispatchToProps = {
    coinsRequested,
    coinsLoaded
}

export default WithCoinService()(connect(mapStateToProps, mapDispatchToProps)(CoinsList));