const comment = (percent) => {
    
    let text =""
    
    if (percent === 100) {
        text = "Excellent! Your knowledge of articles is amazing!"
    } else if (percent > 89) {
        text = "Well done! That's a great effort."
    } else if (percent > 69) {
        text = "You're getting there. With a bit more practice, you'll be an expert on articles."
    } else if (percent > 39) {
        text = "You should make sure to look again at this topic."
    } else {
        text = "You should really take some time to study articles."
    }

    return text
}
export default comment