export interface TreeData {
    nodeName: string | 'root';
    expanded: boolean;
    children: TreeData[];
    icon: TreeIcon | undefined | null;
}

export type TreeIcon = 
    'Folder' |
    'File' |
    'Link';

const tree: TreeData = {
    nodeName: 'Root',
    expanded: true,
    icon: 'Folder',
    children: [
        {
            nodeName: 'Documents',
            expanded: false,
            icon: 'Folder',
            children: [
                {
                    nodeName: 'Resume.pdf',
                    expanded: false,
                    icon: 'File',
                    children: []
                },
                {
                    nodeName: 'Links',
                    expanded: true,
                    icon: 'Folder',
                    children: [
                        {
                            nodeName: 'OpenAI Website',
                            expanded: false,
                            icon: 'Link',
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            nodeName: 'Images',
            expanded: true,
            icon: 'Folder',
            children: [
                {
                    nodeName: 'Vacation.jpg',
                    expanded: false,
                    icon: 'File',
                    children: []
                }
            ]
        }
    ]
};

export default tree;