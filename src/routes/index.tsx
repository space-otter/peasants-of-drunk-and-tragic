import { Title } from "solid-start";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main>
      <Title>Peasants of Drunk and Tragic</Title>
      <div
        class={css({
          alignItems: "center",
          backgroundImage: `url(/assets/forest-tile.webp)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minBlockSize: "100vh",
          padding: "clamp(1rem, 5vw, 7.5rem)",
        })}
      >
        <h1
          class={css({
            color: "base.100",
            fontFamily: "redaction.35",
            fontSize: "3xl",
            lineHeight: "snug",
            textAlign: "center",
            textWrap: "balance",
          })}
        >
          Peasants of Drunk and Tragic
        </h1>
        <p
          class={css({
            color: "base.100",
            fontFamily: "redaction.50",
            fontSize: "lg",
            marginBlockStart: "2xs",
          })}
        >
          Let's{" "}
          <strong
            class={css({
              fontFamily: "redaction.50",
            })}
          >
            code
          </strong>{" "}
          together
        </p>
      </div>
    </main>
  );
}
