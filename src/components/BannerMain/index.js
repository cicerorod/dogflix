import React from "react";

import { Link } from "react-router-dom";
import { Underline } from "styled-icons/fa-solid";
import VideoIframeResponsive from "./components/VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
  WatchButtonLink,
} from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function BannerMain({ videoTitle, videoDescription, url }) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const urlVideo = url;
  // const bgUrl = "https://img.youtube.com/vi/7uP2kp9qZaE/hqdefault.jpg";

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          {/* <WatchButton
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener"
            primary
          >
            Assistir
          </WatchButton> */}

          <WatchButtonLink
            href={urlVideo}
            target="_blank"
            rel="noopener"
            primary
          >
            Assistir
          </WatchButtonLink>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
// href="https://www.youtube.com/watch?v=7uP2kp9qZaE"
//            target="_blank"
