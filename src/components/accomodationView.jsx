import PayButton from "./checkoutForm";

        
        function AccommodationView() {
            const containerStyle = {
                padding: '1.5rem',
                maxWidth: '1200px',
                margin: '0 auto',
            };

            const headerStyle = {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
            };

            const titleStyle = {
                fontSize: '1.5rem',
                fontWeight: '600',
            };

            const actionsStyle = {
                display: 'flex',
                gap: '1rem',
            };

            const actionButtonStyle = {
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: '#4B5563',
            };

            const gridContainerStyle = {
                display: 'grid',
                gridTemplateColumns: '2.3fr 2fr',
                gap: '1rem',
            };

            const mainImageStyle = {
                width: '100%',
                height: 'auto',
                borderRadius: '0.5rem',
            };

            const sideImagesStyle = {
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gap: '1rem',
            };

            const sideImageStyle = {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
            };

            const imageStyle = {
                width: '100%',
                height: 'auto',
                borderRadius: '0.5rem',
            };

            const relativeStyle = {
                position: 'relative',
            };

            const showButtonStyle = {
                position: 'absolute',
                bottom: '0.5rem',
                right: '0.5rem',
                backgroundColor: 'white',
                color: 'black',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            };

            return (
                <div style={containerStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Madeleine Drive @Ballito</h1>
                        <div style={actionsStyle}>
                            <button style={actionButtonStyle}>
                                <i className="fas fa-share"></i>
                                <span>Share</span>
                            </button>
                            <button style={actionButtonStyle}>
                                <i className="fas fa-heart"></i>
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                    <div style={gridContainerStyle}>
                        <div>
                            <img src="https://placehold.co/600x400" alt="Spacious living area with pool table and ocean view" style={mainImageStyle} />
                        </div>
                        <div style={sideImagesStyle}>
                            <div style={sideImageStyle}>
                                <img src="https://placehold.co/400x300" alt="Swimming pool with ocean view" style={imageStyle} />
                                <img src="https://placehold.co/400x300" alt="Modern house exterior with pool" style={imageStyle} />
                            </div>
                            <div style={sideImageStyle}>
                                <img src="https://placehold.co/400x300" alt="Spacious living room with modern furniture" style={imageStyle} />
                                <div style={relativeStyle}>
                                    <img src="https://placehold.co/400x300" alt="Bedroom with ocean view" style={imageStyle} />
                                    <button style={showButtonStyle}>Show all photos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="p-6 max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold">Entire home in Ballito, South Africa</h1>
                    <h2>R2000</h2>
                    <p className="text-gray-700">10 guests · 5 bedrooms · 6 beds · 4.5 baths</p>
                    <div className="flex items-center mt-2">
                        <i className="fas fa-star text-black"></i>
                        <span className="ml-2 text-black">New · <a href="#" className="text-blue-600 underline">1 review</a></span>
                    </div>

                    <hr style={{margin:"1%"}}/>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <i className="fas fa-swimmer text-black"></i>
                            <div className="ml-4">
                                <h2 className="font-bold">Fun and Entertainment</h2>
                                <p className="text-gray-600">This is one of the few places in the area with a pool.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-umbrella-beach text-black"></i>
                            <div className="ml-4">
                                <p className="font-bold">14-min walk to the beach</p>
                                <p className="text-gray-600">This home is by Compensation Beach.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-comments text-black"></i>
                            <div className="ml-4">
                                <p className="font-bold">Exceptional host communication</p>
                                <p className="text-gray-600">Recent guests gave @Ballito a 5-star rating for communication.</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{margin:"1%"}}/>
                    <h2 className="font-bold">Description</h2>
                    <p className="text-gray-700">
                        With four cozy double bedrooms, two with ensuite bathrooms, plus a charming kids' room—perfect for the whole family. Kitchen: Fully equipped with top-of-the-line appliances, elegant crockery, and cutlery.
                        Entertainment: Enjoy a bar area with a pool table and gather around the Big Green Egg for unforgettable moments.
                        Tech & Comfort: Smart technology, full air-conditioning, and solar power backup ensur...
                    </p>
                </div>
                
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Facilities</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center">
                                <i className="fas fa-utensils mr-2"></i> Kitchen
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-parking mr-2"></i> Free parking on premises
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-paw mr-2"></i> Pets allowed
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-wifi mr-2"></i> Wifi
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-swimmer mr-2"></i> Pool
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-tv mr-2"></i> TV
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-water mr-2"></i> Washer
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-dryer mr-2"></i> Dryer - In unit
                            </div>
                        </div>
                        <button className="border border-gray-400 py-2 px-4 rounded">Show all amenities</button>
                    </section>
                  
                

                    <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Policies</h2>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-sign-in-alt mr-2"></i>
                            <span className="font-semibold">Check-in</span>
                        </div>
                        <div className="ml-6">
                            <p>From 14:00 to 00:00</p>
                            <p>Guests are required to show a photo identification and credit card upon check-in</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            <span className="font-semibold">Check-out</span>
                        </div>
                        <div className="ml-6">
                            <p>Until 11:00</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-info-circle mr-2"></i>
                            <span className="font-semibold">Cancellation/ prepayment</span>
                        </div>
                        <div className="ml-6">
                            <p>Cancellation and prepayment policies vary according to accommodation type. Please check what <a href="#" className="text-blue-600">conditions</a> may apply to each option when making your selection.</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-bed mr-2"></i>
                            <span className="font-semibold">Children and beds</span>
                        </div>
                        <div className="ml-6">
                            <p className="font-semibold">Child policies</p>
                            <p>Children of any age are welcome.</p>
                            <p>To see correct prices and occupancy information, please make sure you have added the correct number of children and their ages in your search.</p>
                            <p className="font-semibold mt-4">Cot and extra bed policies</p>
                            <div className="border rounded p-4 mt-2">
                                <div className="flex justify-between">
                                    <span>0 - 2 years</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <i className="fas fa-baby-carriage mr-2"></i>
                                    <span>Cot upon request</span>
                                </div>
                            </div>
                            <p className="mt-2">The number of cots allowed is dependent on the option you choose. Please check your selected option for more information.</p>
                            <p>There are no extra beds available at this property.</p>
                            <p>All cots are subject to availability.</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-user-check mr-2"></i>
                            <span className="font-semibold">No age restriction</span>
                        </div>
                        <div className="ml-6">
                            <p>There is no age requirement for check-in</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-paw mr-2"></i>
                            <span className="font-semibold">Pets</span>
                        </div>
                        <div className="ml-6">
                            <p>Pets are not allowed.</p>
                        </div>
                    </div>
                </div>


                               
                <div className="p-8">
                    <h1 className="text-2xl font-semibold">5 nights in Ballito</h1>
                    <p className="text-gray-500">Oct 28, 2024 - Nov 2, 2024</p>
                    <div className="flex justify-between items-center mt-4">
                        <i className="fas fa-chevron-left text-gray-500"></i>
                        <div className="flex-1 mx-4">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-lg font-semibold">October 2024</h2>
                                    <div className="grid grid-cols-7 text-center mt-2">
                                        <div>Su</div>
                                        <div>Mo</div>
                                        <div>Tu</div>
                                        <div>We</div>
                                        <div>Th</div>
                                        <div>Fr</div>
                                        <div>Sa</div>
                                    </div>
                                    <div className="grid grid-cols-7 text-center mt-2">
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <div key={i} className={`py-2 ${i === 27 ? 'bg-black text-white rounded-full' : ''}`}>
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">November 2024</h2>
                                    <div className="grid grid-cols-7 text-center mt-2">
                                        <div>Su</div>
                                        <div>Mo</div>
                                        <div>Tu</div>
                                        <div>We</div>
                                        <div>Th</div>
                                        <div>Fr</div>
                                        <div>Sa</div>
                                    </div>
                                    <div className="grid grid-cols-7 text-center mt-2">
                                        {Array.from({ length: 30 }, (_, i) => (
                                            <div key={i} className={`py-2 ${i === 1 ? 'bg-black text-white rounded-full' : ''}`}>
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-chevron-right text-gray-500"></i>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <i className="fas fa-calendar-alt text-gray-500"></i>
                        <a href="#" className="text-gray-500">Clear dates</a>
                    </div>
                    <PayButton />
                </div>

                    <hr className="my-8"/>
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">1 review</h2>
                        <p className="mb-4">Among other things, all appear after 2 reviews</p>
                        <div className="flex items-start mb-4">
                            <img src="https://placehold.co/50x50" alt="Profile picture of reviewer" class="rounded-full mr-4"/>
                            <div>
                                <p className="font-bold">Vladislav</p>
                                <p className="text-sm text-gray-600">Johannesburg, South Africa</p>
                                <p className="text-sm text-gray-600">1 review</p>
                                <p className="text-sm text-gray-600">October 2021</p>
                                <p className="mt-2">Beautiful, spacious, clean, top kids, this is the perfect house! We got in touch with the host daily and we couldn't have chosen a better house! We loved our stay!...</p>
                                <button className="text-blue-500">Show more</button>
                            </div>
                        </div>
                    </section>
                    <hr className="my-8"/>
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Where you'll be</h2>
                        <img src="https://placehold.co/600x300" alt="Map showing the location of the property" class="w-full mb-4"/>
                        <p className="font-bold">Ballito, KwaZulu-Natal, South Africa</p>
                        <p>Welcome to Ballito, a vibrant seaside town brimming with excitement and family-friendly fun. Nestled along the stunning Dolphin Coast, this area boasts pristine beaches, lush greenery, and a variety of activities for all ages. Whether you're looking to relax on the beach, explore local markets, or enjoy water sports, Ballito has something for everyone.</p>
                        <button className="text-blue-500">Show more</button>
                    </section>
                </div>
            );
        }

        export default AccommodationView