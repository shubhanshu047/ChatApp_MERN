import { styled } from "@mui/material";


// Ek input tag banaya, jisme ye sab properties already applied hai, so that i can use it later...
export const VisuallyHiddenInput = styled("input")({
    border:0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding:0,
    position:"absolute",
    whiteSpace:"nowrap",
    width:1,
});
