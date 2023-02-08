import YouTube, { YouTubeProps } from 'react-youtube';

export default function Example() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    console.log(event);
    // event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    width: '800',
    height: '600',
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return <YouTube videoId="6w5WOsb22JI" opts={opts} onReady={onPlayerReady} />;
}
