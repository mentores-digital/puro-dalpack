const criarBreadcrumbs = () => {
    // 1 CRIAR CONTEINER
    const divBreadcrumbs = document.createElement("div");
    divBreadcrumbs.id = "breadcrumbs";
    // 2 CRIAR ORDERED LIST 
    const orderedList = document.createElement("ol");
    orderedList.vocab = "https://schema.org/";
    orderedList.typeof = "BreadcrumbList";
    // 3 CRIAR LI
    const listItem = document.createElement("li");
    listItem.property = "itemListElement";
    listItem.typeof = "ListItem";
    // 4 CRIAR breadcrumb link
    const linkBreadcrumb = document.createElement("a");
    linkBreadcrumb.href = "/";
    linkBreadcrumb.property = "item";
    linkBreadcrumb.typeof = "WebPage";
    linkBreadcrumb.textContent = "Página inicial";
    // 4 CRIAR META 
    const metaBreadcrumb = document.createElement("meta");
    metaBreadcrumb.property = "position";
    metaBreadcrumb.content = "1";
    // APPENDS 4->3
    listItem.append(linkBreadcrumb);
    listItem.append(metaBreadcrumb);
    // APPENDS 3->2
    orderedList.append(listItem);
    // APPEND 2->1
    divBreadcrumbs.append(orderedList);

    return divBreadcrumbs;
}


window.addEventListener('load', () => {
    'strict'

    try {


        // CRIAR BREADCRUMB CUSTOMIZADO
        document.querySelector("body").append(criarBreadcrumbs());

        /** Custom list **/
        const newList = document.querySelector('#breadcrumbs');

        /** Exclude home page **/
        if (window.location.pathname === '/') {
            newList.remove();
            return;
        }

        const breadcrumbs = document.querySelector('.breadcrumbs');
        if (breadcrumbs) {
            const ul = breadcrumbs.querySelector('ul');
            const items = ul.querySelectorAll('a, li > strong');
            const ol = newList.querySelector('ol');

            items.forEach((item, index) => {
                if (index) {

                    /** Insert Schema Markup in breadcrumbs **/
                    const li = document.createElement('li');
                    li.setAttribute('property', 'itemListElement');
                    li.setAttribute('typeof', 'ListItem');

                    const link = document.createElement('a');
                    link.setAttribute('property', 'item');
                    link.setAttribute('typeof', 'WebPage');

                    const meta = document.createElement('meta');
                    meta.setAttribute('property', 'position');
                    meta.setAttribute('content', index + 1);

                    /** Set data to link */
                    link.href = item.href;
                    link.innerText = item.innerText;

                    li.append(link);
                    li.append(meta);
                    ol.append(li);
                }
            });

            newList.append(ol);
            breadcrumbs.remove();

            /** Change position breadcrumb **/
            const productBody = document.querySelector('#corpo > .conteiner');
            productBody.prepend(newList);

        } else {
            newList.remove();
        }

    } catch (erro) {
        console.log(`Erro encontrado -> ${erro}`);
    }
});