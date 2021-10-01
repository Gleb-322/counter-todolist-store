import React from "react";
import StoreServiceContext from "../StoreServiceContext";

const WithShoesService = (Wrapped) => {
    return (props) => {
        return (
            <StoreServiceContext.Consumer>
                {
                    (ShoesService) => {
                        return <Wrapped {...props} ShoesService={ShoesService}/>
                    }
                }
            </StoreServiceContext.Consumer>
        )
    }
}
export default WithShoesService