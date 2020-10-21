function map = ew_release(N_0,D)
% N_0: Number of earthworms released in each cell
% D: Interval cell number (diatance=100m)
% M_ew = floor(100/D)*floor(100/D); % Number of the cell --> initial release 
map_ori = zeros(100); % Distribution of earthworms at the time of placement
for i = 1:floor(100/D)
    for j = 1:floor(100/D)
        x = 1 + D*(i-1);
        y = 1 + D*(j-1);
        map_ori(x,y) = N_0;
    end
end
map = map_ori;
