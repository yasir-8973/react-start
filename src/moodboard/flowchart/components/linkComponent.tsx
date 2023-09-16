import React, { useCallback, useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import "../../styles/link.scss";

export default function Link(props: any) {
  const [showInvalidUrlText, setShowInvalidUrlText] = useState<Boolean>(false);
  const [urlText,setUrlText] = useState<string>("");
  const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const onLinkSubmit = (evt) => {
    evt.preventDefault();
    console.log(isValidUrl(urlText));
    if(isValidUrl(urlText)){

    }else {
        setShowInvalidUrlText(true);
    }
  };

  return (
    <div className="LinkContainer">
      <div className="LinkEditor">
        {showInvalidUrlText ? (
          <div>Not a valid url</div>
        ) : (
          <>
            <div className="LinkStateDisplay">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="Icon link-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.134 5.834a.749.749 0 0 1 1.06 0 4.75 4.75 0 0 1 0 6.717L8.31 14.437A4.75 4.75 0 0 1 1.592 7.72a.749.749 0 1 1 1.06 1.06 3.25 3.25 0 1 0 4.597 4.596l1.886-1.885a3.25 3.25 0 0 0 0-4.596.75.75 0 0 1 0-1.061zM7.72 1.59a4.75 4.75 0 1 1 6.717 6.718.749.749 0 1 1-1.06-1.06A3.251 3.251 0 0 0 8.78 2.651L6.895 4.538a3.248 3.248 0 0 0 0 4.596.75.75 0 0 1-1.061 1.06 4.75 4.75 0 0 1 0-6.717z"
                  fill="#A3A7AE"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="LinkInput" tabIndex={-1}>
              <form className="link-form" onSubmit={onLinkSubmit}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Enter a link URL"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={urlText}
                    onChange={(e) => setUrlText(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
