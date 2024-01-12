export const constants = {
  glassStroke: "glass-border-gradient relative",
  glassFill: "shadow-md backdrop-blur-md bg-gradient-to-b from-[#fff]/60 to-[#fff]/50 bg-white/60",

  darkStroke: "dark-glass-border-gradient relative",
  darkFill: "shadow-md backdrop-blur-md bg-gradient-to-b from-[#1F29371A]/60 to-[#1F29371A]/50"
}

const container = {
  maxWidth: 'max-w-[1300px] mx-auto'
}

export const styles = {
  glass: `${constants.glassStroke} ${constants.glassFill}`,
  darkGlass: `${constants.darkStroke} ${constants.darkFill}`,


}



export default container