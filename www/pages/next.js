import React from "react";
import Link from "next/link";

class Next extends React.Component {
  render() {
    return (
      <div className="center">
        <div>
          <div>Next page of the current experiment</div>
          <div>
            <Link href="/">
              <a>Go to the home page</a>
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

export default Next;
