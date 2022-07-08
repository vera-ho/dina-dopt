import { connect } from "react-redux";
import PetsShow from "./pet_show";

const mSTP = (state, ownProps) => {
    let pets = Object.values(state.entities.pets);
    let petIdx = -1;

    pets.forEach( (pet, idx) => {
        if(pet._id === ownProps.match.params.pet_id) {
            petIdx = idx;
        }
    });

    let reviews = Object.values(state.entities.reviews);
    reviews = reviews.filter( review => review.pet === ownProps.match.params.pet_id)

    return {
        pet:  pets[petIdx],
        reviews: reviews,
        users: Object.values(state.entities.users),
        currentUser: state.session.user
    }
}

export default connect(mSTP)(PetsShow);
