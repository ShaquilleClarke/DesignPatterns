class Process {
    constructor(state) {
        this.state = state;
    }
}

const Singleton = (function() {
    const ProcessManager = function() {
        this.numProcess = 0;
    }
        
    let pMangager;

    createProcessManager = () => {
        pMangager = new ProcessManager()
        return pMangager;
    }
        
    return {
        getProcessManager: () => {
            if(!pMangager) pMangager = createProcessManager();
            return pMangager;
        }
    }
})()




const processMangager = Singleton.getProcessManager();
const processMangager2 = Singleton.getProcessManager();

console.log(processMangager2)
