import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, addTransectionType, deleteTransectionType} from "./types";



const initialState: State = {
    transactions : [
        {
            id: 0,
            description: "",
            transactionAmount: 0
        }
    ],
    sign: false
}

const slice = createSlice({
    name: "user_profile",
    initialState,
    reducers: {
        clearState: () => {
            return initialState
        },
        addTransection: (state, {payload}: PayloadAction<addTransectionType>) => {
            return {
                ...state,
                transactions: [...state.transactions, payload.transaction]
            }
        },
        deleteTransection: (state, {payload}: PayloadAction<deleteTransectionType>) => {
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== payload.id )
            }
        },
        changeSign: (state) => {
            return {
                ...state,
                sign: !state.sign
            }
        }
    },
    // extraReducers: (builder) => {
        // builder.addCase(getProfileInfo.pending, handlePending("getProfileInfo", true))
        // builder.addCase(getProfileInfo.fulfilled, (state, { payload, meta: { arg } }) => {
        //     if (arg.entityType !== SLICE_ENTITY) { return }
        //     if (!payload?.data) { return }
        //     state.fetchingStatus.getProfileInfo = false
        //     state.error.getProfileInfo = null;
        //     const { getEntityProfile } = payload.data;
        //     state.profileInfo = getEntityProfile as UserFullProfileInfo;
        //     if (payload.authState === "SIGNED_OUT" && !payload.entity) {
        //         state.isMe = null;
        //     } else if (payload.authState === "SIGNED_IN" && getEntityProfile.id === payload.entity?.id) {
        //         state.isMe = true
        //     } else if (payload.authState === "SIGNED_IN" && payload.entity && getEntityProfile.id !== payload.entity.id) {
        //         state.isMe = false
        //     }
        // })

        // builder.addCase(getProfileInfo.rejected, handleReject("getProfileInfo", true))
        // builder.addCase(followEntity.pending, handlePending("followEntity", true))
        // builder.addCase(followEntity.fulfilled, (state, { payload, meta: { arg } }) => {
        //     if (arg.entityType !== SLICE_ENTITY) { return }
        //     if (!payload?.data?.followEntity) { return }
        //     state.fetchingStatus.followEntity = false
        //     state.error.followEntity = null;
        //     // const { followEntity } = payload.data;
        //     if (state.profileInfo?.viewerRelationWithRequestedProfile) {
        //         state.profileInfo.viewerRelationWithRequestedProfile.followingEntity = true
        //     }
        // })
        // builder.addCase(followEntity.rejected, handleReject("followEntity", true))
    // }

})


// Extract the action creators object and the reducer
const { actions, reducer } = slice
// Extract and export each action creator by name
export const { clearState, addTransection, deleteTransection, changeSign } = actions
// Export the reducer, either as a default or named export
export default reducer