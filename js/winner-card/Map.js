const { useState, useEffect } = React;

const NonWinnerCard = (props) => {
    return (
        <div className="row" style={{ marginTop: props.marginTop, padding: 0 }}>
            <div className="non-winner-card-glass" style={{ position: 'relative' }}>
                {/* Efeito de luz */}
                <div className="light-effect"></div>

                {/* Badge de campeão */}
                <div className="champion-badge">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="currentColor"
                        />
                    </svg>
                    TOP WINNER 2025
                </div>

                <div className="winner-content">
                    <div className="winner-avatar">
                        <div className="avatar-glow"></div>
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQGT7Rf7rNGzUQ/profile-displayphoto-shrink_200_200/B4DZYWYU5jHIAY-/0/1744132198407?e=1753315200&v=beta&t=k-9f5JrOzG3xgRROs6ESDf1ixyWbsQiRA84m5WE2Now"
                            alt="Winner"
                        />
                    </div>

                    <div className="winner-info">
                        <h2>
                            Norberto Ferreira
                            <span className="winner-tag">#1 Champion</span>
                        </h2>

                        <p className="winner-title">
                            The 'Light Fingerprint' of Rubidium for Precise Atomic Clocks
                        </p>

                        <div className="winner-actions">
                            <div className="social-icons">
                                <a
                                    href="SEU_LINK_LINKEDIN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>

                                <a
                                    href="SEU_LINK_INSTAGRAM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
                                    </svg>
                                </a>

                                <a
                                    href="SEU_LINK_LATTES"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M11.15 3a7.69 7.69 0 0 0-2.74.5 6.12 6.12 0 0 0-2.4 1.44Q4.67 5.85 4 7a7.33 7.33 0 0 0-.69 3.13v.24a7.54 7.54 0 0 0 .45 2.6 6.3 6.3 0 0 0 1.18 2A5.78 5.78 0 0 0 6.4 16a5.88 5.88 0 0 0 2 .87 8 8 0 0 0 2.75.16 6.55 6.55 0 0 0 2.26-.69 5.46 5.46 0 0 0 1.8-1.44 6.48 6.48 0 0 0 1.11-2.12 7.46 7.46 0 0 0 .4-2.43V10a7.63 7.63 0 0 0-.5-2.71 5.93 5.93 0 0 0-1.45-2.1 6.2 6.2 0 0 0-2.35-1.35A8.18 8.18 0 0 0 11.15 3zm0 1.44a6.08 6.08 0 0 1 2.35.47 5.19 5.19 0 0 1 1.9 1.3 5.63 5.63 0 0 1 1.16 2 6.89 6.89 0 0 1 .4 2.38v.24a6.21 6.21 0 0 1-.35 2.16 5.28 5.28 0 0 1-.94 1.72 4.73 4.73 0 0 1-1.5 1.18 5.63 5.63 0 0 1-1.94.61 6.79 6.79 0 0 1-2.31-.13 5 5 0 0 1-1.8-.73 4.86 4.86 0 0 1-1.26-1.3 5.3 5.3 0 0 1-.8-1.77 6.73 6.73 0 0 1-.27-2v-.24a6.06 6.06 0 0 1 .6-2.53 4.82 4.82 0 0 1 1.56-1.77 5.77 5.77 0 0 1 2.3-.8 7.46 7.46 0 0 1 1.15-.08zM8 8v8h1.5v-3.25h2.5a2.5 2.5 0 0 0 0-5H8zm1.5 1.5h2a1 1 0 0 1 0 2h-2z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="button-group">
                                <button className="modern-btn profile-btn">
                                    View Project
                                    <svg viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>

                                <button className="modern-btn profile-btn">
                                    View Full Profile
                                    <svg viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const WinnerCard = (props) => {
    return (
        <div
            className="row"
            style={{ marginTop: props.marginTop, padding: 0 }}
        >
            <div className="winner-card-glass" style={{ position: 'relative' }}>
                <div className="light-effect"></div>

                <div className="champion-badge">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="currentColor"
                        />
                    </svg>
                    TOP WINNER 2025
                </div>

                <div className="winner-content">
                    <div className="winner-avatar">
                        <div className="avatar-glow"></div>
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQGT7Rf7rNGzUQ/profile-displayphoto-shrink_200_200/B4DZYWYU5jHIAY-/0/1744132198407?e=1753315200&v=beta&t=k-9f5JrOzG3xgRROs6ESDf1ixyWbsQiRA84m5WE2Now"
                            alt="Winner"
                        />
                    </div>

                    <div className="winner-info">
                        <h2>
                            Norberto Ferreira
                            <span className="winner-tag">#1 Champion</span>
                        </h2>

                        <p className="winner-title">
                            The 'Light Fingerprint' of Rubidium for Precise Atomic Clocks
                        </p>

                        <div className="winner-actions">
                            <div className="social-icons">
                                <a
                                    href="SEU_LINK_LINKEDIN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>
                                <a
                                    href="SEU_LINK_INSTAGRAM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
                                    </svg>
                                </a>
                                <a
                                    href="SEU_LINK_LATTES"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M11.15 3a7.69 7.69 0 0 0-2.74.5 6.12 6.12 0 0 0-2.4 1.44Q4.67 5.85 4 7a7.33 7.33 0 0 0-.69 3.13v.24a7.54 7.54 0 0 0 .45 2.6 6.3 6.3 0 0 0 1.18 2A5.78 5.78 0 0 0 6.4 16a5.88 5.88 0 0 0 2 .87 8 8 0 0 0 2.75.16 6.55 6.55 0 0 0 2.26-.69 5.46 5.46 0 0 0 1.8-1.44 6.48 6.48 0 0 0 1.11-2.12 7.46 7.46 0 0 0 .4-2.43V10a7.63 7.63 0 0 0-.5-2.71 5.93 5.93 0 0 0-1.45-2.1 6.2 6.2 0 0 0-2.35-1.35A8.18 8.18 0 0 0 11.15 3zm0 1.44a6.08 6.08 0 0 1 2.35.47 5.19 5.19 0 0 1 1.9 1.3 5.63 5.63 0 0 1 1.16 2 6.89 6.89 0 0 1 .4 2.38v.24a6.21 6.21 0 0 1-.35 2.16 5.28 5.28 0 0 1-.94 1.72 4.73 4.73 0 0 1-1.5 1.18 5.63 5.63 0 0 1-1.94.61 6.79 6.79 0 0 1-2.31-.13 5 5 0 0 1-1.8-.73 4.86 4.86 0 0 1-1.26-1.3 5.3 5.3 0 0 1-.8-1.77 6.73 6.73 0 0 1-.27-2v-.24a6.06 6.06 0 0 1 .6-2.53 4.82 4.82 0 0 1 1.56-1.77 5.77 5.77 0 0 1 2.3-.8 7.46 7.46 0 0 1 1.15-.08zM8 8v8h1.5v-3.25h2.5a2.5 2.5 0 0 0 0-5H8zm1.5 1.5h2a1 1 0 0 1 0 2h-2z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="button-group">
                                <button className="modern-btn profile-btn">
                                    View Project
                                    <svg viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>

                                <button className="modern-btn profile-btn">
                                    View Full Profile
                                    <svg viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const Map = () => {
    const dados = [
        { name: "Norberto", "isWinner": true },
        { name: "Norberto", "isWinner": false },
        { name: "Norberto", "isWinner": false },
        { name: "Norberto", "isWinner": false },
        { name: "Norberto", "isWinner": false },
        { name: "Norberto", "isWinner": false },
        { name: "Norberto", "isWinner": false }
    ]
    return (
        dados.map((item, index) => (
            item.isWinner ? <WinnerCard
                key={index}
                marginTop={index === 0 ? '9rem' : '2rem'}
            /> : <NonWinnerCard
                key={index}
                marginTop={index === 0 ? '9rem' : '2rem'}
            />
        ))
    )
}


ReactDOM.render(<Map />, document.getElementById('map'));