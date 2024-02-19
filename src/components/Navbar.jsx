import React from 'react';
import { Link } from '@mui/material'
import { SearchOffOutlined } from '@mui/icons-material';
import { VerifiedUserOutlined } from '@mui/icons-material';
const Navbar = () => {
    return (
        <div>
            <div>
                LOGO
            </div>
            <div>
                <Link href="#" underline="none">
                    Home
                </Link>
                <Link href="#" underline="none">
                    Recipes
                </Link>
                <Link href="#" underline="none">
                    About Us
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm for uploading.");
                    }}
                >
                    Upload
                </Link>
            </div>
            <div>
                    <SearchOffOutlined />
                    <VerifiedUserOutlined />

            </div>
        </div>
    )
}

export default Navbar