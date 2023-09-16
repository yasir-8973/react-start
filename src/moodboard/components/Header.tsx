import * as React from "react";
import '../styles/header.scss';
import { S } from "../../namespace/header.namespace";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSearchParams, Link } from "react-router-dom";

export default () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return (
    <S.Header>
      <S.HeaderLeft>
        <div className="BreadcrumbList">
          <div className="Breadcrumb">
            <div className="BreadcrumbContents">
              <div className="BreadcrumbIcon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="Icon milanote-logo-small"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#1B2536"
                      d="M0 9a9 9 0 1 0 18 0A9 9 0 0 0 0 9z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 11.242L9.793 9.035 12 6.83v4.413zM6.83 12l2.205-2.207L11.243 12H6.829zm-.76-5.171l2.207 2.206-2.207 2.207V6.83zm6.67-1.788a.535.535 0 0 0-.584.116l-3.122 3.12-3.12-3.12A.536.536 0 0 0 5 5.535v7.005a.537.537 0 0 0 .15.367l.002.002.001.001.008.008.001.002h.002a.52.52 0 0 0 .367.151h7.009a.54.54 0 0 0 .531-.53V5.536a.536.536 0 0 0-.33-.495z"
                    ></path>
                  </g>
                </svg>
                <span></span>
              </div>
              <div className="breadcrumb-title">Home</div>
            </div>
          </div>
          <Link to={{
            pathname: "/project",
            search: `?id=${id}`,
          }}>
            <IconButton>
                <Close/>
            </IconButton>
          </Link>
        </div>
      </S.HeaderLeft>
    </S.Header>
  );
};
