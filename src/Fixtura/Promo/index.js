import { useCurrentFrame, AbsoluteFill } from "remotion";

export const Promotion = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "white"
      }}
    >
      The current frame is {frame}.
    </AbsoluteFill>
  );
};