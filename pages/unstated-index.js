import React from "react";
import Link from "next/link";
import { Subscribe } from "unstated";
import { ClockContainer, CounterContainer } from "../unstated";
import { Clock, Counter } from "../components";

class Index extends React.Component {
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <Subscribe to={[ClockContainer, CounterContainer]}>
        {(clock, counter) => {
          this.timer = clock.interval;
          return (
            <div>
              <Link href="/unstated-about">
                <button>go to About</button>
              </Link>
              <div>
                <Clock clock={clock} />
                <Counter counter={counter} />
              </div>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}

export default Index;
