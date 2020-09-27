import React from 'react';
import { GoogleOneTapTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const GoogleOneTap = React.memo((props: OwnTypes.Props) => {
    return (
        <>
            <div
                id="g_id_onload"
                data-client_id="176145798825-bv8q3fd66t2g2nu1hel693niuv4p7vn5.apps.googleusercontent.com"
                data-login_uri="http://localhost:3000"
                data-your_own_param_1_to_login="any_value"
                data-your_own_param_2_to_login="any_value">
            </div>
        </>
    )
});