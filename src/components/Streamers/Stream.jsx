import React from "react";

export function Streamers(props) {
    return (
        <section>
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>

                <ul class="channel-list">
                    <li>
                        <a
                            target="_blank"
                            href="https://www.twitch.tv/gaules">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png" alt="Imagem de Mayk Brito" />
                        </a>
                    </li>

                    <li>
                        <a
                            target="_blank"
                            href="https://www.twitch.tv/alanzoka">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png" alt="Imagem de Alanzoka" />
                        </a>
                    </li>

                    <li>
                        <a
                            target="_blank"
                            href="https://www.twitch.tv/cellbit">
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png" alt="Imagem de Cellbit" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    )
}