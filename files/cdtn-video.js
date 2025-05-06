const { useState, useEffect } = React;

const YouTubeVideo = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
      <iframe
        src="https://www.youtube.com/embed/hlvru_u4LgQ?si=tGdvh8-I_UNBG6kj"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: '0', width: '640px', height: '230px', margin: '4rem auto' }}>
      <YouTubeVideo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('cdtn-video'));