import React from "react";
import styled from "styled-components";
import { ethers } from "ethers";

import { useUser } from "../context/UserContext"
import { useContract } from "../context/ContractContext"

const MetaContainer = styled.div`
    height: 6rem;
    width: 100%;
    background-color: #212936;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: .04rem solid white;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: 1.8rem;
    color: white;
    margin-left: 2rem;
`;

const SubContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Network = styled.div`
    font-size: 1.5rem;
    color: white;
    margin-right: 2rem;
`;

const AccountWrapper = styled.div`
    height: 2.1rem;
    width: 16rem;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #ED7014, #6e3003);
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: .8rem;
`;

const Account = styled(AccountWrapper)`
    width: 9rem;
    background-color: black;
    height: 2rem;
    display: flex;
    justify-content: center;
    margin-right: 0;
    color: white;
    background: black;
`;

const Button = styled.button`
    width: 7rem;
    height: 2.2rem;
    font-size: 1.2rem;
    margin-right: 2rem;
    border-radius: .8rem;
    cursor: pointer;
    outline: none;
    :hover {
        background:#5f3c74;
    }
`;


const Eth = styled.div`
    margin-left: .5rem;
`;

 
export default function NavBar({ connectAccount, isConnected }) {

    const {
        userAddress,
        ethBalance,
    } = useUser();

    const {
        networkId,
    } = useContract();


    console.log(userAddress)

    return(
            <MetaContainer>
                <Container>
                    <Title>Super Farm</Title>
                    <SubContainer>
                        <Network>
                            { networkId ? networkId.charAt(0).toUpperCase() + networkId.slice(1) : "N/A" }
                        </Network>
                        {
                            isConnected ? (
                                <Button>Connected</Button>
                                ) : (
                                <Button
                                    onClick={connectAccount}
                                >
                                    Connect
                                </Button>
                        )}
                        {/* <AccountWrapper> */}

                            {/* <Eth>
                                
                            </Eth> */}
                            <Account>
                                { userAddress ? userAddress.slice(0, 5) + `...` + userAddress.slice(-4) : null }
                            </Account>
                        {/* </AccountWrapper> */}
                    </SubContainer>
                </Container>
            </MetaContainer>
    )
}