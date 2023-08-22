import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --transparente: --transparente;
    
    // Brand
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;

    // Grey scale
    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10: #FDFDFD;

    --white: #FFFFFF;

    // Feedback
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    
    --success1: #18794E;
    --success2: #CCEBD7;
    --success3: #DDF3E4;

    // Color random profile
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: ##6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #6100FF;
    --random12: #30007D;

    // Badge Low Price
    --green1-strong: #439874;
    --green1-weak: #54A282;

    --font-title: 'Lexend', sans-serif;
    --font-body: 'Inter', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: 0 0 0 0;
    

    // font-family: 'Inter', sans-serif;

    body {
      height: 100vh;
      width: 100vw;

      overflow-x: hidden;
    }

    font-family: var(--font-body);
    
  }

    h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);

  }
`;
