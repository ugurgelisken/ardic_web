import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const Brands = () => {
  const router = useRouter();

  const [left, setLeftData] = useState({});
  const [right, setRightData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`/api/${router.locale}/brands`)
      .then((response) => response.json())
      .then((data) => {
        setLeftData(data.left);
        setRightData(data.right);
        setIsLoaded(true);
      });
  }, [router.locale]);

  return (
    isLoaded && (
      <div className="container-brand">
        <div className="brand">
          <Link href={left.slug}>
            <a>
              <img className="brandLogo" src={left.icon} alt="" />
              <img className="brandName1" src={left.logo} alt="" />
              <p className="brandText">{left.summary}</p>
            </a>
          </Link>
        </div>
        <div className="brand">
          <Link className="brand" href={right.slug}>
            <a>
              <img className="brandLogo" src={right.icon} alt="" />
              <img className="brandName2" src={right.logo} alt="" />
              <p className="brandText">{right.summary}</p>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .container-brand {
            display: flex;
            justify-content: center;
            margin-top: -100px;
            filter: drop-shadow(2px 2px 8px white);
            opacity: 0.9;
            overflow: hidden;
            height: 100px;
          }

          .brand {
            width: 300px;
            margin-left: 5px;
            margin-right: 5px;
            border-bottom: none;
            height: 100px;
            background-color: white;
            padding: 16px;
            overflow: hidden;
          }
          .brand:hover {
            margin-top: 4px;
            transition: 0.1s;
          }
          .brandLogo {
            margin: -30px;
          }
          .brandName1 {
            float: right;
            height: 22px;
          }
          .brandName2 {
            float: right;
            height: 29px;
          }
          .brandText {
            float: right;
            width: 180px;
            text-align: right;
            margin-top: -36px;
            line-height: 20px;
            font-size: 14px;
          }
          @media screen and (max-width: 640px) {
            .container {
              margin-right: 10px;
              margin-left: 10px;
            }
            .brand {
              width: 50%;
              height: 100px;
              text-align: center;
              padding: 4px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .brand:nth-child(1) {
              border-right: 1px solid rgba(0, 0, 0, 0.2);
            }
            .brand:nth-child(2) {
              border-left: 1px solid rgba(0, 0, 0, 0.2);
            }
            .brandLogo {
              height: 80px;
              margin: -10px;
            }
            .brandName1 {
              display: none;
            }
            .brandName2 {
              display: none;
            }
            .brandText {
              float: none;
              width: auto;
              text-align: center;
              margin-top: 0px;
              font-size: 14px;
              line-height: 14px;
            }
            .container {
              height: 110px;
              opacity: 1;
            }
          }
        `}</style>
      </div>
    )
  );
};

export default Brands;
