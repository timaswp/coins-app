import React, { useEffect } from "react";
import WithCoinService from "../../hoc/with-coin-service";
import { connect } from "react-redux";
import { coinRequested, coinLoaded, loadingError } from "../../../actions";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../loader/loader";
import Spinner from "../../spinner/spinner";
import Error from "../../error/error";
import "./coin-page.scss";


const CoinPage = ({CoinService, coin, coinRequested, coinLoaded, loadingError, loading, error}) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        
        coinRequested();

        CoinService.getCoinById(location.pathname.slice(6))
            .then(res => coinLoaded(res))
            .catch(() => loadingError());

    }, [CoinService, location.pathname]);

    const goBack = () => {
        navigate(-1);
    };

    const {
        name,
        denomination,
        detailedDescription,
        price,
        year,
        country,
        metal,
        quality,
        weight,
        obverseImageLink,
        reverseImageLink,
    } = coin;

    if (error) {
        return <Error/>
    }

    return (
        <div className="coin-page">
            <div className="coin-page__wrapper">
                {loading ? <Spinner/> : <>
                    <img className="coin-page__img" src={obverseImageLink}/>
                    <img className="coin-page__img" src={reverseImageLink}/>
                    </>}
                <div className="coin-page__card">
                    {loading ? <Loader className="mb20"/> : <h1 className="coin-page__title">{name}</h1>}
                    {loading ? (
                        <><Loader className="mb20"/><Loader className="mb20"/><Loader className="mb20"/></>
                        ) : <p className="coin-page__descr">{detailedDescription}</p>}
                    <table className="coin-page__table">
                        <tbody>
                            <tr>
                                <th scope="row">Issuing Country</th>
                                {loading ? <td><Loader/></td> : <td>{country}</td>}
                            </tr>
                            <tr>
                                <th scope="row">Composition</th>
                                {loading ? <td><Loader/></td> : <td>{metal}</td>}
                            </tr>
                            <tr>
                                <th scope="row">Quality</th>
                                {loading ? <td><Loader/></td> : <td>{quality}</td>}
                            </tr>
                            <tr>
                                <th scope="row">Denomination</th>
                                {loading ? <td><Loader/></td> : <td>{denomination}</td>}
                            </tr>
                            <tr>
                                <th scope="row">Year</th>
                                {loading ? <td><Loader/></td> : <td>{year}</td>}
                            </tr>
                            <tr>
                                <th scope="row">Weight</th>
                                {loading ? <td><Loader/></td> : <td>{`${weight} g`}</td>}
                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                {loading ? <td><Loader/></td> : <td>{`${price} $`}</td>}
                            </tr>
                        </tbody>
                    </table>
                    <button className="coin-page__btn" onClick={goBack}>Back to the list</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        coin: state.coin,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    coinRequested,
    coinLoaded,
    loadingError
};

export default WithCoinService()(connect(mapStateToProps, mapDispatchToProps)(CoinPage));