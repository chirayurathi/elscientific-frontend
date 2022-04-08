import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FeatureItem from "./FeatureItem";
import svg1 from "../../../../assets/images/features/1.svg";
import svg2 from "../../../../assets/images/features/2.svg";
import svg3 from "../../../../assets/images/features/3.svg";
import svg4 from "../../../../assets/images/features/4.svg";
import svg5 from "../../../../assets/images/features/5.svg";
import svg6 from "../../../../assets/images/features/6.svg";

const Features = () => {
  return (
    <Grid
      item
      container
      alignItems="center"
      justifyContent="space-around"
      sm={12}
      lg={12}
      mt={12}
    >
      <Grid item sm={12}>
        <Typography variant="h2" textAlign="center">
          Tailor-made features
        </Typography>
      </Grid>
      <Grid
        item
        sm={8}
        md={4}
        mt={3}
        justifyContent="space-around"
        alignItems="center"
      >
        <Typography
          variant="body1"
          textAlign="center"
          alignContent="center"
          alignItems="center"
        >
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </Typography>
      </Grid>
      <Grid
        item
        container
        sm={12}
        mt={6}
        ml={{'lg':15,'md':10, 'sm':5}}
        mr={{'lg':15,'md':10, 'sm':5}}
        justifyContent="center"
      >
        <FeatureItem
          svg={svg1}
          title="Robust workflow"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        />
        <FeatureItem
          svg={svg2}
          title="Flexibility"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        />
        <FeatureItem
          svg={svg3}
          title="User friendly"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        />
        <FeatureItem
          svg={svg4}
          title="Multiple layouts"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        />
        <FeatureItem
          svg={svg5}
          title="Better components"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        />
        <FeatureItem
          svg={svg6}
          title="Well organised"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        />
      </Grid>
    </Grid>
  );
};

export default Features;
