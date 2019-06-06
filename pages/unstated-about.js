import React from "react";
import Link from "next/link";
import { Subscribe } from "unstated";
import { ClockContainer, CounterContainer } from "../unstated";
import { Clock, Counter } from "../components";

class About extends React.Component {
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
              <Link href="/unstated-index">
                <button>go to Index</button>
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

export default About;
