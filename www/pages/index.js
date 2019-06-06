import React from "react";
import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <div className="center">
        <div>
          <div> Home page oneline</div>
          <div>
            <Link href="/next">
              <a>Go to the next page</a>
            </Link>
          </div>
        </div>

        <style jsx>{`
          .center {
            display: flex;
            justify-content: center;
            margin-top: 50px;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
