import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, openSearchModal } from '../../features/commonSlice'
import { logoutUser } from '../../features/userSlice'
import { CiShop } from 'react-icons/ci'
import { sendRequest } from '../../features/requestsSlice'

const SearchModal = ({ isOpen }) => {
    const { searchedShop } = useSelector((state) => state.shop)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    if (!isOpen) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div>
                        <CiShop />
                    </div>
                    <h2>{searchedShop && searchedShop.shopName}</h2>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to send employement request to {searchedShop.shopName}?</p>
                </div>
                <div className="modal-footer">
                    <button
                        onClick={() => {
                            dispatch(sendRequest({ businessId: searchedShop.googleId, employeeId: user.googleId }))
                            dispatch(openSearchModal(false))
                        }
                        }
                    >
                        Yes
                    </button>
                    <button onClick={() => dispatch(openSearchModal(false))}>No</button>
                </div>
            </div>
        </div>
    )
}

export default SearchModal
