import * as React from "react";
import { Div } from "@reflexjs/components";

import { BackgroundSlider } from "./background-slider";

import OpenCollective from "./companies/opencollective";
import Eaze from "./companies/eaze";
import MagicLeap from "./companies/magic-leap";
import Trulia from "./companies/trulia";
import Netflix from "./companies/netflix";
import GitHub from "./companies/github";
import Scale from "./companies/scale";
import Auth0 from "./companies/auth0";
import Ticketmaster from "./companies/ticketmaster";
import Twitch from "./companies/twitch";

import Tencent from "./companies/tencent";
import Jet from "./companies/jet";
import Coinbase from "./companies/coinbase";
import Docker from "./companies/docker";
import Invision from "./companies/invision";
import Binance from "./companies/binance";
import Hulu from "./companies/hulu";
import Pling from "./companies/pling";
import Starbucks from "./companies/starbucks";
import Uber from "./companies/uber";
import Trovit from "./companies/trovit";
import Sesame from "./companies/sesame";

export const Logo = ({ children }) => (
  <Div
    d="inline-block"
    p="0 2.2rem"
    verticalAlign="middle"
    opacity="0.25"
    outline="none"
    cursor="default"
    transition="opacity 0.2s ease"
    hoverOpacity="0.8"
  >
    {children}
  </Div>
);

export const CompaniesSlider = () => {
  return (
    <Div mt="8" mb="4">
      <BackgroundSlider duration={40}>
        <Div whiteSpace="nowrap" overflow="hidden">
          <Logo>
            <OpenCollective />
          </Logo>
          <Logo>
            <Eaze />
          </Logo>
          <Logo>
            <MagicLeap />
          </Logo>
          <Logo>
            <Trulia />
          </Logo>
          <Logo>
            <Netflix />
          </Logo>
          <Logo>
            <GitHub />
          </Logo>
          <Logo>
            <Scale />
          </Logo>
          <Logo>
            <Ticketmaster />
          </Logo>
          <Logo>
            <Twitch />
          </Logo>
          <Logo>
            <Sesame />
          </Logo>
          <Logo>
            <Pling />
          </Logo>
        </Div>
      </BackgroundSlider>
      <Div mb="4" />
      <BackgroundSlider duration={50}>
        {(num) => (
          <Div whiteSpace="nowrap" overflow="hidden">
            <Logo>
              <Auth0 />
            </Logo>
            <Logo>
              <Tencent />
            </Logo>
            <Logo>
              <Jet />
            </Logo>
            <Logo>
              <Starbucks />
            </Logo>
            <Logo>
              <Docker id={`docker-${num}`} />
            </Logo>
            <Logo>
              <Hulu />
            </Logo>
            <Logo>
              <Coinbase />
            </Logo>
            <Logo>
              <Uber />
            </Logo>
            <Logo>
              <Invision />
            </Logo>
            <Logo>
              <Trovit />
            </Logo>
            <Logo>
              <Binance />
            </Logo>
          </Div>
        )}
      </BackgroundSlider>
    </Div>
  );
};
