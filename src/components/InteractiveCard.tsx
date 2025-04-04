'use client'

export default function InteractiveCard( {children, contentName}: {children: React.ReactNode, contentName:string} ) {

    // function onCardClick() {
    // alert("You clicked "+ contentName);
    // }

    function onCardHover(event: React.SyntheticEvent) {
        if(event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.add('bg-neutral-200');
        } else {
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.add('bg-white');
        }
    }

    return (
        <div className="w-full h-[300px] rounded-lg shadow-lg bg-white" onMouseOver={(e) => onCardHover(e)} onMouseOut={(e) => onCardHover(e)}>
            {children}
        </div>
    );
}