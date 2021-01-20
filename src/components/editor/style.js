import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  
   --ck-border-radius: 4px;

   --ck-font-size-base: .84rem;

   --ck-custom-background:#F8F9F9;

   --ck-custom-white: hsl(0, 0%, 100%);
   --ck-color-base-foreground: var(--ck-custom-background);
   --ck-color-focus-border: hsl(208, 90%, 62%);
   --ck-color-text: #9CA7B0;
   --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
   --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);
   --ck-color-toolbar-border: #A8C6DF;
   --ck-color-base-border: #A8C6DF;


   /* --ck-color-toolbar-border: transparent; */

   & .ck.ck-dropdown__panel{ 
      --ck-color-text: #3F536E;
   }

   & .ck-toolbar__separator{
      --ck-spacing-small: 1rem;
      --ck-color-toolbar-border: transparent;
   }
`;
