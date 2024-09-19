import React from 'react';
import CoinServiceContext from '../coin-service-context/coin-service-context';

const WithCoinService = () => (Wrapped) => {
    return (props) => {
        return (
            <CoinServiceContext.Consumer>
                {
                    (CoinService) => {
                        return <Wrapped {...props} CoinService={CoinService}/>
                    }
                }
            </CoinServiceContext.Consumer>
        )
    }
};

export default WithCoinService;