import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { slackIntegration } from "../services/slackhandelService";
import { LoaderContext } from "../contexts/LoaderContext";

const Slackhandel = () => {
    const { oidcUser } = useReactOidc();
    let { id } = useParams();
    const [successFlag, setSuccessFlag] = useState(true);
    const [startLoader,stopLoader]=useContext(LoaderContext)

    useEffect(() => {
        startLoader()
        _slackIntegration();
        
    });

    const _slackIntegration = async () => {
        let response = await slackIntegration(id, oidcUser.access_token)
        if (response.status === 200) {
            setSuccessFlag(true)
        }
        else {
            setSuccessFlag(false)
        }
        stopLoader()
    };

    return <main>
        {successFlag ?
            <div>
                <div
                    style={{
                        padding: '24px',
                        textTransform: "uppercase",
                        fontWeight: 'bold',
                        fontSize: 42,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Your Slack is now Integrated to Hive Ums
                </div>
                <div
                    style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: 24,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Hive-Ums powered by hivecore limited
                </div>
            </div> :
            <div>
                <div
                    style={{
                        padding: '24px',
                        textTransform: "uppercase",
                        fontWeight: 'bold',
                        fontSize: 42,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    OOps Something Went Worng
                </div>
                <div
                    style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: 24,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Try again latter
                </div>
            </div>



        }
    </main>;
};

export default Slackhandel;
