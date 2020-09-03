import React from 'react';

export default function CardInput() {
    return (
        <div className=''>
            <form>
                <div>
                    <label>
                        Front:
                        <input type="text" name="front" />
                    </label>
                </div>
                <div>
                    <label>
                        Back:
                        <input type="text" name="back" />
                    </label>
                </div>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
